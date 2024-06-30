#[macro_use]
extern crate rocket;
use rocket::fs::FileServer;
use std::path::PathBuf;

#[launch]
fn rocket() -> _ {
    let mut project_root = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    project_root.pop();
    project_root.push("client");
    project_root.push("build");
    rocket::build().mount("/", FileServer::from(project_root))
}
