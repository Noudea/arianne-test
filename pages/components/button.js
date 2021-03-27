import Button from '../../components/buttons/Button'
import IconButton from '../../components/buttons/IconButton'
import Dropdown from '../../components/dropdown/Dropdown'
import List from '../../components/list/List'
import CircleLoader from '../../components/loader/CircleLoader'
import Tooltip from '../../components/tooltip/Tooltip'

const button = () => {
    return (
        <>
            <Button large>Salut Test</Button>
            <Button textColor="red" outlined large>
                Salut Test
            </Button>
            <Button outlined large>
                Outlined
            </Button>
            <Button color="red" outlined large>
                Outlined colored
            </Button>
            <Button transparent large>
                transparent
            </Button>
            <Button large iconLeft iconSrc="/vercel.svg">
                transparent
            </Button>
            <IconButton large iconSrc="/svg/bell.svg">
                transparent
            </IconButton>
            <IconButton large color="red" iconSrc="/svg/bell.svg">
                transparent
            </IconButton>
            <IconButton large outlined iconSrc="/svg/bell.svg">
                transparent
            </IconButton>
            <Dropdown textContent="dropdown" large>
                <p>dqsdqsd</p>
                <p>sdqdqdsq</p>
            </Dropdown>
            <Dropdown outlined textContent="dropdown" large>
                <p>dqsdqsd</p>
                <p>sdqdqdsq</p>
            </Dropdown>

            <CircleLoader xsmall fast color="#fa3c5f"></CircleLoader>
            <CircleLoader small color="#617eff"></CircleLoader>
            <CircleLoader medium color="#617eff"></CircleLoader>
            <CircleLoader large></CircleLoader>
            <CircleLoader xlarge color="#fa3c5f" slow></CircleLoader>
            <CircleLoader xlarge color="#617eff" thin></CircleLoader>
            <CircleLoader xlarge color="#617eff" bold fast></CircleLoader>
            <div>
            <Tooltip textContent="this is a toolTip">
                <Button  medium>
                    ToolTip
                </Button>
            </Tooltip>
            </div>
        </>
    )
}

export default button
