# ChatSpace DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many  :groups,  through:  :groups_users
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- blongs_to :user
- blongs_to :group