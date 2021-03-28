import Button from '../../components/buttons/Button'
import IconButton from '../../components/buttons/IconButton'
import Container from '../../components/container/Container'
import Flex from '../../components/container/Flex'
import Dropdown from '../../components/dropdown/Dropdown'
import List from '../../components/list/List'
import CircleLoader from '../../components/loader/CircleLoader'
import Table from '../../components/table/Table'
import Tooltip from '../../components/tooltip/Tooltip'

const button = () => {

    
    const data = [
        {
            property: 'width',
            type: 'string',
            default: '100%',
            description: 'width of the component'
        },
        {
            property: 'height',
            type: 'string',
            default: '100%',
            description: 'height of the component'
        }
    ]


    return (
        <>
        <Container padding='50px'width='100%'>
            <Flex flexDirection='column'  justifyContent='space-around'>
                <Container width='40%'>
                    <Table data={data}></Table>
                </Container>
                <Container width='40%'>
                    <Table data={data}></Table>
                </Container>
            </Flex>
        </Container>
        </>
    )
}

export default button
