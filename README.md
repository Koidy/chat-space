# ChatSpace DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many  :groups,  through:  :groups_users
- has_many :users_messages
- has_many 	:messages,  through:  :users_messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null:false|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_one :group
- has_many :users_messages
- has_many  :user,  through:  :users_messages


## users_messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :message