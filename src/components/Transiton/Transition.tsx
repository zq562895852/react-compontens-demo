import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

export type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,
    // 标志动画是否包一层，区别组件的原来动画，以防被覆盖
    // 如果原来的组件有动画，动画属性transition是不会继承的，所以会被覆盖掉
    wrapper?: boolean,
}
// interface TransitionProps extends CSSTransitionProps {
//     animation?: AnimationName
// }
// 切记如果使用动画，不能设置元素的display，不然动画效果不会出现
const Transition: React.FC<TransitionProps> = (props) => {
    const { children, wrapper, classNames, animation, ...restProps } = props;
    return (
        <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
            { wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
}

// 默认情况下，子组件在达到“exited”状态后保持挂载状态。如果希望在组件完成退出后卸载组件，请设置unmountonnexit
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
}

export default Transition;