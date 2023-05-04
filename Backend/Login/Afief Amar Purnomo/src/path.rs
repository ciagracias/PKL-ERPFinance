

use sqlx::{Pool,Postgres};
use be_erp::{table_list, add_table, update_table, delete_table, login_account, add_account, update_account};
use tide::{Server};

pub fn path(app: &mut Server<Pool<Postgres>>){
app.at("list").get(table_list);
app.at("add").post(add_table);
app.at("update").put(update_table);
app.at("delete").delete(delete_table);
app.at("register").post(add_account);
app.at("lp").put(update_account);
app.at("in").post(login_account);
}


