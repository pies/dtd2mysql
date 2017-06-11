
import {FixedWidthRecord} from "../../../src/feed/record/FixedWidthRecord";
import {MultiRecordFile} from "../../../src/feed/file/MultiRecordFile";
import {TextField} from "../../../src/feed/field/TextField";
import {DateField} from "../../../src/feed/field/DateField";
import {IntField, ZeroFillIntField} from "../../../src/feed/field/IntField";

const supplementFixedWidthRecord = new FixedWidthRecord(
  "supplement",
  ["supplement_code", "end_date"],
  {
    "supplement_code": new TextField(2, 3),
    "end_date": new DateField(5),
    "start_date": new DateField(13),
    "quote_date": new DateField(21),
    "description": new TextField(29, 20),
    "short_desc": new TextField(49, 12),
    "suppl_type": new TextField(61, 3),
    "price": new IntField(64, 5),
    "cpf_ticket_type": new TextField(69, 5),
    "min_group_size": new IntField(74, 1),
    "max_group_size": new IntField(75, 1),
    "per_leg_or_dir": new TextField(76, 1),
    "class_type": new TextField(77, 1),
    "capri_code": new TextField(78, 3),
    "sep_tkt_ind": new TextField(81, 1),
    "resvn_type": new TextField(82, 2),
    "sundry_code": new ZeroFillIntField(84, 5, true)
  }
);

const supplementRuleFixedWidthRecord = new FixedWidthRecord(
  "supplement_rule",
  ["rule_number", "end_date"],
  {
    "rule_number": new IntField(2, 3),
    "end_date": new DateField(5),
    "start_date": new DateField(13),
    "quote_date": new DateField(21),
    "train_uid": new TextField(29, 7),
    "train_uid_desc": new TextField(36, 39),
    "fare_class": new TextField(75, 1),
    "quota": new TextField(76, 1),
    "weekend_first": new TextField(77, 1),
    "silver_standard": new TextField(78, 1),
    "railcard": new TextField(79, 1),
    "catering_code": new TextField(80, 1),
    "sleeper": new TextField(81, 1),
    "accom_class": new TextField(82, 1),
    "status": new TextField(83, 1),
    "reservation_status": new TextField(84, 3),
    "sectors": new TextField(87, 3)
  }
);

const supplementRuleAppliesFixedWidthRecord = new FixedWidthRecord(
  "supplement_rule_applies",
  ["rule_number", "end_date", "ie_marker", "condition_type", "ie_code"],
  {
    "rule_number": new IntField(2, 3),
    "end_date": new DateField(5),
    "ie_marker": new TextField(13, 1),
    "condition_type": new TextField(14, 1),
    "ie_code": new TextField(15, 3)
  }
);

const supplementRuleSupplementFixedWidthRecord = new FixedWidthRecord(
  "supplement_rule_supplement",
  ["rule_number", "end_date", "supplement_code"],
  {
    "rule_number": new IntField(2, 3),
    "end_date": new DateField(5),
    "supplement_code": new TextField(13, 3),
    "om_flag": new TextField(16, 1)
  }
);

const supplementOverrideFixedWidthRecord = new FixedWidthRecord(
  "supplement_override",
  ["supplement_code", "end_date", "overridden_supplement"],
  {
    "supplement_code": new TextField(2, 3),
    "end_date": new DateField(5),
    "overridden_supplement": new TextField(13, 3)
  }
);

const SUP = new MultiRecordFile({
  "S": supplementFixedWidthRecord,
  "R": supplementRuleFixedWidthRecord,
  "A": supplementRuleAppliesFixedWidthRecord,
  "M": supplementRuleSupplementFixedWidthRecord,
  "O": supplementOverrideFixedWidthRecord
});

export default SUP;