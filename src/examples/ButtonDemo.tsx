import Button, { ButtonType, ButtonSize } from '../components/Button/Button';

function ButtonDemo() {
    return (
        <Button btnType={ButtonType.Danger} >
            危险
        </Button>
    )
}

export default ButtonDemo;