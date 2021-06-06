//
// Autogenerated by Thrift Compiler (0.14.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
var GetNewsRes = module.exports.GetNewsRes = function(args) {
  this.code = null;
  this.msg = null;
  this.data = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = args.msg;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [null]);
    }
  }
};
GetNewsRes.prototype = {};
GetNewsRes.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.data = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.NewInfo();
          elem3.read(input);
          this.data.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetNewsRes.prototype.write = function(output) {
  output.writeStructBegin('GetNewsRes');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRING, 2);
    output.writeString(this.msg);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.data.length);
    for (var iter4 in this.data) {
      if (this.data.hasOwnProperty(iter4)) {
        iter4 = this.data[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NewInfo = module.exports.NewInfo = function(args) {
  this.title = null;
  this.content = null;
  if (args) {
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
  }
};
NewInfo.prototype = {};
NewInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NewInfo.prototype.write = function(output) {
  output.writeStructBegin('NewInfo');
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 1);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 2);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AddNewRes = module.exports.AddNewRes = function(args) {
  this.code = null;
  this.msg = null;
  this.data = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.msg !== undefined && args.msg !== null) {
      this.msg = args.msg;
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = new ttypes.NewInfo(args.data);
    }
  }
};
AddNewRes.prototype = {};
AddNewRes.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.data = new ttypes.NewInfo();
        this.data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AddNewRes.prototype.write = function(output) {
  output.writeStructBegin('AddNewRes');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.msg !== null && this.msg !== undefined) {
    output.writeFieldBegin('msg', Thrift.Type.STRING, 2);
    output.writeString(this.msg);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 3);
    this.data.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

