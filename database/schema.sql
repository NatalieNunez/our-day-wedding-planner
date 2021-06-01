set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "images" (
    "imageId"    serial,
    "url"        text               not null,
    "createdAt"  timestamptz(6)     not null default now(),
    primary key ("imageId")
);

create table "guests" (
    "guestId"    serial,
    "firstName"  text               not null,
    "lastName"   text               not null,
    "status"     text               not null,
    "createdAt"  timestamptz(6)     not null default now(),
    primary key ("guestId")
);

create table "users" (
    "userId"        serial,
    "userName"      text            not null,
    "partnerName"   text            not null,
    "weddingDate"   text            not null,
    "createdAt"     timestamptz(6)  not null default now(),
    primary key ("userId")
);
