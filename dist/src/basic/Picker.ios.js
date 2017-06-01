Object.defineProperty(exports,"__esModule",{value:true});exports.PickerNB=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Picker.ios.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _Text=require('./Text');
var _List=require('./List');
var _IconNB=require('./IconNB');
var _Radio=require('./Radio');
var _Container=require('./Container');
var _Content=require('./Content');
var _ListItem=require('./ListItem');
var _Button=require('./Button');
var _Header=require('./Header');
var _Title=require('./Title');
var _Left=require('./Left');
var _Right=require('./Right');
var _Body=require('./Body');
var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);

var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerNB=function(_Component){_inherits(PickerNB,_Component);

function PickerNB(props){_classCallCheck(this,PickerNB);var _this=_possibleConstructorReturn(this,(PickerNB.__proto__||Object.getPrototypeOf(PickerNB)).call(this,
props));
_this.state={
modalVisible:false,
currentLabel:_this.getLabel(props),
dataSource:props.children};return _this;

}_createClass(PickerNB,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var currentLabel=this.state.currentLabel;
var nextLabel=this.getLabel(nextProps);
var currentDS=this.state.dataSource;
var nextDS=nextProps.children;

if(currentLabel!==nextLabel){
this.setState({
currentLabel:nextLabel});

}
if(currentDS!==nextDS){
this.setState({
dataSource:nextDS});

}
}},{key:'getInitialStyle',value:function getInitialStyle()

{
return{
picker:{},


pickerItem:{}};



}},{key:'_setModalVisible',value:function _setModalVisible(
visible){
this.setState({modalVisible:visible});
}},{key:'prepareRootProps',value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().picker,
itemStyle:this.getInitialStyle().pickerItem};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'getLabel',value:function getLabel(

props){
var item=_lodash2.default.find(props.children,function(child){return child.props.value===props.selectedValue;});
return _lodash2.default.get(item,'props.label');
}},{key:'renderIcon',value:function renderIcon()

{
return _react2.default.cloneElement(this.props.iosIcon,{style:{fontSize:22,lineHeight:26,color:'#7a7a7a'}});
}},{key:'renderButton',value:function renderButton()

{var _this2=this;
var onPress=function onPress(){_this2._setModalVisible(true);};
var text=this.state.currentLabel?this.state.currentLabel:this.props.defaultLabel;
if(this.props.renderButton){
return this.props.renderButton(onPress,text,this);
}
return _react2.default.createElement(_Button.Button,{
style:this.props.style,
dark:true,
picker:true,
transparent:true,
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:91}},

_react2.default.createElement(_Text.Text,{note:this.props.note,style:this.props.textStyle,__source:{fileName:_jsxFileName,lineNumber:98}},text),
this.props.iosIcon===undefined?null:this.renderIcon());

}},{key:'renderHeader',value:function renderHeader()

{var _this3=this;
return this.props.renderHeader?this.props.renderHeader(function(){return _this3._setModalVisible(false);}):_react2.default.createElement(_Header.Header,{style:this.props.headerStyle,__source:{fileName:_jsxFileName,lineNumber:104}},
_react2.default.createElement(_Left.Left,{__source:{fileName:_jsxFileName,lineNumber:105}},_react2.default.createElement(_Button.Button,{
style:_extends({shadowOffset:null,shadowColor:null,shadowRadius:null,shadowOpacity:null},this.props.headerBackButtonStyle),
transparent:true,onPress:function onPress(){_this3._setModalVisible(false);},__source:{fileName:_jsxFileName,lineNumber:105}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:108}},this.props.headerBackButtonText||'Back'))),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:109}},_react2.default.createElement(_Title.Title,{style:this.props.headerTitleStyle,__source:{fileName:_jsxFileName,lineNumber:109}},this.props.iosHeader||'Select One')),
_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:110}}));

}},{key:'render',value:function render()

{var _this4=this;
return(
_react2.default.createElement(_reactNative.View,{ref:function ref(c){return _this4._root=c;},__source:{fileName:_jsxFileName,lineNumber:116}},
this.renderButton(),
_react2.default.createElement(_reactNative.Modal,{
supportedOrientations:this.props.supportedOrientations||null,
animationType:'slide',
transparent:false,
visible:this.state.modalVisible,
onRequestClose:function onRequestClose(){_this4._setModalVisible(false);},__source:{fileName:_jsxFileName,lineNumber:118}},

_react2.default.createElement(_Container.Container,{__source:{fileName:_jsxFileName,lineNumber:125}},
this.renderHeader(),
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_List.List,{
dataArray:this.state.dataSource,
renderRow:function renderRow(child){return(
_react2.default.createElement(_ListItem.ListItem,{
selected:child.props.value===_this4.props.selectedValue?true:false,
button:true,
style:_this4.props.itemStyle,
onPress:function onPress(){
_this4._setModalVisible(false);_this4.props.onValueChange(child.props.value);
_this4.setState({current:child.props.label});
},__source:{fileName:_jsxFileName,lineNumber:131}},

_react2.default.createElement(_Text.Text,{style:_this4.props.itemTextStyle,__source:{fileName:_jsxFileName,lineNumber:140}},child.props.label),
_react2.default.createElement(_Right.Right,{__source:{fileName:_jsxFileName,lineNumber:141}},
child.props.value===_this4.props.selectedValue?
_react2.default.createElement(_Radio.Radio,{selected:true,__source:{fileName:_jsxFileName,lineNumber:143}}):

_react2.default.createElement(_Radio.Radio,{selected:false,__source:{fileName:_jsxFileName,lineNumber:145}}))));},__source:{fileName:_jsxFileName,lineNumber:128}}))))));










}}]);return PickerNB;}(_react.Component);



PickerNB.Item=_react2.default.createClass({displayName:'Item',

render:function render(){
return(
_react2.default.createElement(_reactNative.Picker.Item,_extends({},this.props(),{__source:{fileName:_jsxFileName,lineNumber:164}})));

}});


PickerNB.propTypes=_extends({},_reactNative.ViewPropTypes);



var StyledPickerNB=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.PickerNB',{},_mapPropsToStyleNames2.default)(PickerNB);exports.


PickerNB=StyledPickerNB;
//# sourceMappingURL=Picker.ios.js.map