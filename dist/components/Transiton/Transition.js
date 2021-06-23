var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { CSSTransition } from 'react-transition-group';
// interface TransitionProps extends CSSTransitionProps {
//     animation?: AnimationName
// }
// 切记如果使用动画，不能设置元素的display，不然动画效果不会出现
var Transition = function (props) {
    var children = props.children, wrapper = props.wrapper, classNames = props.classNames, animation = props.animation, restProps = __rest(props, ["children", "wrapper", "classNames", "animation"]);
    return (_jsx(CSSTransition, __assign({ classNames: classNames ? classNames : animation }, restProps, { children: wrapper ? _jsx("div", { children: children }, void 0) : children }), void 0));
};
// 默认情况下，子组件在达到“exited”状态后保持挂载状态。如果希望在组件完成退出后卸载组件，请设置unmountonnexit
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
};
export default Transition;
