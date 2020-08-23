import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { initiateInfo } from '../redux/actions'

const Container = styled.div`
    width: 1000px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
`
const HeadRow = styled.div`
    display: flex;
    align-items: center;
    color: white;
    jsutify-content: space-between;
`
const HeadGroup = styled.div`
    
`
const Table = styled.table`
    width: 1000px;
    margin-top: 30px;
`
const Row = styled.tr`

`
const TD = styled.td`
    padding: 10px;
    background-color: white;
`

const InfoView = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        let data = localStorage.getItem('data')
        if (data) {
            let jdata = JSON.parse(data)
            dispatch(initiateInfo(jdata.value))
        }
    }, [])

    const info = useSelector(state => state.info)

    const generateInfo = () => {
        return info.map((item, index) => {
            return <Row key={index}>
                <TD>{item.firstname + " " + item.lastname}</TD>
                <TD>{item.gender}</TD>
                <TD>{item.phone}</TD>
                <TD>{item.nationality}</TD>
                <TD></TD>
            </Row>
        })
    }

    return (
        <Container>
            <HeadRow>
                <HeadGroup>
                    <input style={{ margin: '10px' }} type='checkbox' id='select-all' />
                    <label style={{ margin: '10px' }} for='select-all'>Select all</label>
                    <button>DELETE</button>
                </HeadGroup>
            </HeadRow>
            <Table>
                <Row style={{ backgroundColor: '#363b3d', color: 'white', height: '40px' }}>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone no.</th>
                    <th>Nationality</th>
                    <th>Option</th>
                </Row>
                {generateInfo()}
            </Table>
        </Container>
    )
}

export default InfoView