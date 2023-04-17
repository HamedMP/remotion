extern crate ffmpeg_next as remotionffmpeg;

pub struct FrameCacheItem {
    pub bitmap: Vec<u8>,
    pub resolved_pts: i64,
    pub resolved_dts: i64,
    pub asked_time: i64,
}

pub struct FrameCache {
    pub items: Vec<FrameCacheItem>,
}

impl FrameCache {
    pub fn new() -> Self {
        Self { items: Vec::new() }
    }
    pub fn add_item(&mut self, item: FrameCacheItem) {
        let exists = self
            .items
            .iter()
            .any(|i| i.resolved_pts == item.resolved_pts);
        if exists {
            return;
        }

        self.items.push(item);
    }

    pub fn get_item(&self, time: i64) -> Option<Vec<u8>> {
        let mut best_item: Option<&FrameCacheItem> = None;
        let mut best_distance = std::i64::MAX;

        for i in 0..self.items.len() {
            let item = &self.items[i];
            let exact = item.resolved_pts == time;

            if item.resolved_pts < time {
                continue;
            }

            if exact {
                best_item = Some(item);
                break;
            }

            let distance = (item.resolved_pts - time).abs();
            if distance < best_distance {
                best_distance = distance;
                best_item = Some(item);
            }
        }

        if best_item.is_none() {
            return None;
        }

        let best_item = best_item.unwrap();
        Some(best_item.bitmap.clone())
    }
}