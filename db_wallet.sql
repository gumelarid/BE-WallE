/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100422
 Source Host           : localhost:3306
 Source Schema         : db_wallet

 Target Server Type    : PostgreSQL
 Target Server Version : 130000
 File Encoding         : 65001

 Date: 29/03/2022 11:48:12
*/


-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS "db_wallet"."history";
CREATE TABLE "history" (
  "history_id" varchar(255) NOT NULL,
  "user_id" varchar(255),
  "history_nominal" int4,
  "history_status" int4,
  "history_created_at" timestamp
)
;

-- ----------------------------
-- Records of history
-- ----------------------------
BEGIN;
INSERT INTO "db_wallet"."history" VALUES ('3fcad65e-6b33-4edc-afc5-8f68a077b3a6', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 500000, 2, '2022-03-26 19:28:21');
INSERT INTO "db_wallet"."history" VALUES ('a427c537-bc39-451c-9887-deba031bdd28', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', 100000, 2, '2022-03-26 20:52:57');
INSERT INTO "db_wallet"."history" VALUES ('bf46d455-3617-4dd0-a961-5ebbedad1683', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 50000, 2, '2022-03-26 18:57:32');
INSERT INTO "db_wallet"."history" VALUES ('cc409cef-e91b-4760-b0ed-ba4ad119bf05', '1660326f-5568-4447-ac00-bd1691d36ad9', 50000, 2, '2022-03-26 21:17:50');
INSERT INTO "db_wallet"."history" VALUES ('f4567c4e-0cde-4994-84e5-a122bca01871', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', 1000000, 2, '2022-03-26 21:09:40');
COMMIT;

-- ----------------------------
-- Table structure for transfer
-- ----------------------------
DROP TABLE IF EXISTS "db_wallet"."transfer";
CREATE TABLE "transfer" (
  "transfer_id" varchar(255) NOT NULL,
  "user_id_a" varchar(255),
  "user_id_b" varchar(255),
  "user_role" int4,
  "transfer_note" text,
  "transfer_amount" int4,
  "transfer_created_at" timestamp
)
;

-- ----------------------------
-- Records of transfer
-- ----------------------------
BEGIN;
INSERT INTO "db_wallet"."transfer" VALUES ('0c403909-0d4f-4a92-bc00-4b7f3483e8c5', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 5000, '2022-03-26 19:35:33');
INSERT INTO "db_wallet"."transfer" VALUES ('1648297494986', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 50000, '2022-03-26 19:24:54');
INSERT INTO "db_wallet"."transfer" VALUES ('1648297732618', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 50000, '2022-03-26 19:28:52');
INSERT INTO "db_wallet"."transfer" VALUES ('1648297912859', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 5000, '2022-03-26 19:31:52');
INSERT INTO "db_wallet"."transfer" VALUES ('1648297977124', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 5000, '2022-03-26 19:32:57');
INSERT INTO "db_wallet"."transfer" VALUES ('317c3c6c-3f27-4b41-b7ff-0ca5ac5c4216', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 1, 'buat beli es krim', 50000, '2022-03-26 21:13:56');
INSERT INTO "db_wallet"."transfer" VALUES ('3a5aeaf9-e01f-46dd-b978-a27242451d23', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 5000, '2022-03-26 19:34:47');
INSERT INTO "db_wallet"."transfer" VALUES ('59087712-833c-4681-8abd-5047f87eac80', '1660326f-5568-4447-ac00-bd1691d36ad9', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 2, 'coba kirim', 5000, '2022-03-26 19:35:33');
INSERT INTO "db_wallet"."transfer" VALUES ('5a15dd31-7ae9-46a7-8196-09015eddcb9b', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, 'coba kirim', 50000, '2022-03-26 19:36:12');
INSERT INTO "db_wallet"."transfer" VALUES ('7934edfa-ead2-4a8d-af9a-baef2496fd14', '1660326f-5568-4447-ac00-bd1691d36ad9', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 2, 'coba kirim', 50000, '2022-03-26 19:36:12');
INSERT INTO "db_wallet"."transfer" VALUES ('b4bd8a41-3e02-410d-a1eb-deeb9a34112a', '1660326f-5568-4447-ac00-bd1691d36ad9', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', 2, '', 10000, '2022-03-26 21:08:07');
INSERT INTO "db_wallet"."transfer" VALUES ('bdedd07f-4783-49d9-a517-c29b2ee1f325', '1660326f-5568-4447-ac00-bd1691d36ad9', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 2, 'coba kirim', 5000, '2022-03-26 19:34:47');
INSERT INTO "db_wallet"."transfer" VALUES ('c79ac2ae-cf04-4ecc-b72d-bedc124ec8f2', '1660326f-5568-4447-ac00-bd1691d36ad9', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 1, 'buat beli rokok', 20000, '2022-03-26 21:18:36');
INSERT INTO "db_wallet"."transfer" VALUES ('dc4019e1-687e-4c5e-8e56-3ec003d6ad91', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', 2, 'buat beli es krim', 50000, '2022-03-26 21:13:56');
INSERT INTO "db_wallet"."transfer" VALUES ('ddb60a25-1d3d-4818-bd31-41082a16d4c8', '25cf6cb0-83f6-4fa9-9dff-90928a89daaa', '1660326f-5568-4447-ac00-bd1691d36ad9', 2, 'buat beli rokok', 20000, '2022-03-26 21:18:36');
INSERT INTO "db_wallet"."transfer" VALUES ('ff9cf06d-5190-40ee-a568-4092b17c72ad', '75c56aed-d3d2-4ce3-9158-6c55fd57a061', '1660326f-5568-4447-ac00-bd1691d36ad9', 1, '', 10000, '2022-03-26 21:08:07');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "db_wallet"."user";
CREATE TABLE "user" (
  "user_id" varchar(225) NOT NULL,
  "user_email" varchar(100),
  "user_password" varchar(255),
  "user_name" varchar(255),
  "user_phone" char(13),
  "user_picture" varchar(255),
  "user_pin" char(6),
  "user_role" int4,
  "user_status" int4,
  "user_balance" int4,
  "user_created_at" timestamp,
  "user_updated_at" timestamp
)
;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO "db_wallet"."user" VALUES ('1660326f-5568-4447-ac00-bd1691d36ad9', 'user1@gmail.com', '$2b$10$OmTJ5K9ygZkX3rPN0OPYMOVw04BnaGQp9ZxakK2Dvvs1zjGKHxxJe', 'rinos Wong', '08111111111', 'blank.jpg', '123456', 2, 1, 100000, '2022-03-25 20:34:44', NULL);
INSERT INTO "db_wallet"."user" VALUES ('25cf6cb0-83f6-4fa9-9dff-90928a89daaa', 'user2@gmail.com', '$2b$10$MW4vWDS7FV7luPqsfmC4celqP1Zo..AZeBRYP7tE.wNbVrBkCwSH6', 'adam Wong', '08111111112', 'blank.jpg', '123456', 2, 1, 450000, '2022-03-25 20:35:31', NULL);
INSERT INTO "db_wallet"."user" VALUES ('75c56aed-d3d2-4ce3-9158-6c55fd57a061', 'user3@gmail.com', '$2b$10$V9JY9ujQH9QSGtfRF3Fu8OQqTnzsr8xmn/YBoN5NDkQ9.2nLosV.O', 'simada yumiko', '123456789123', 'blank.jpg', '111111', 2, 1, 1040000, '2022-03-26 20:28:13', NULL);
COMMIT;

-- ----------------------------
-- Primary Key structure for table history
-- ----------------------------
ALTER TABLE "history" ADD PRIMARY KEY ("history_id");

-- ----------------------------
-- Primary Key structure for table transfer
-- ----------------------------
ALTER TABLE "transfer" ADD PRIMARY KEY ("transfer_id");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "user" ADD PRIMARY KEY ("user_id");
