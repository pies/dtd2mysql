
import {FixedWidthRecord} from "../../../src/feed/record/FixedWidthRecord";
import {SingleRecordFile} from "../../../src/feed/file/SingleRecordFile";
import {TextField} from "../../../src/feed/field/TextField";
import {IntField, ZeroFillIntField} from "../../../src/feed/field/IntField";
import {DateField} from "../../../src/feed/field/DateField";

const nonDerivableFareFixedWidthRecord = new FixedWidthRecord(
  "non_derivable_fare",
  ["origin_code", "destination_code", "route_code", "railcard_code", "ticket_code", "nd_FixedWidthRecord_type", "end_date"],
  {
    "origin_code": new TextField(1, 4),
    "destination_code": new TextField(5, 4),
    "route_code": new ZeroFillIntField(9, 5, true),
    "railcard_code": new TextField(14, 3),
    "ticket_code": new TextField(17, 3),
    "nd_FixedWidthRecord_type": new TextField(20, 1),
    "end_date": new DateField(21),
    "start_date": new DateField(29),
    "quote_date": new DateField(37),
    "suppress_mkr": new TextField(45, 1),
    "adult_fare": new IntField(46, 8, true),
    "child_fare": new IntField(54, 8, true),
    "restriction_code": new TextField(62, 2),
    "composite_indicator": new TextField(64, 1),
    "cross_london_ind": new TextField(65, 1),
    "ps_ind": new TextField(66, 1)
  }
);

const NDF = new SingleRecordFile(nonDerivableFareFixedWidthRecord);

export default NDF;