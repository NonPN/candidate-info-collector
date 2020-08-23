import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { initiateInfo, removeInfo, selectAll } from '../redux/actions'
import InfoRow from './InfoRow'

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

const InfoView = () => {
    const [selected, setSelected] = useState([])

    const dispatch = useDispatch()

    const info = useSelector(state => state.info)

    useEffect(() => {
        let data = localStorage.getItem('data')
        if (data) {
            let jdata = JSON.parse(data)
            dispatch(initiateInfo(jdata.value))
        }
    }, [])

    useEffect(() => {
    }, [selected])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify({ value: info }))
    }, [info])

    const deleteSeletedInfo = () => {
        selected.map(item => {
            dispatch(removeInfo(item))
        })
        setSelected([])
    }

    const generateInfo = () => {
        return info.map((item, index) => {
            return <InfoRow item={item} index={index} selected={selected} setSelected={setSelected} />
        })
    }

    const onSelectAll = (e) => {
        let arr = []
        if (e.target.checked) {
            info.map((item) => {
                arr.push(item.id)
            })
            setSelected(arr)
        } else {
            setSelected(arr)
        }
        dispatch(selectAll())
    }

    return (
        <Container>
            <HeadRow>
                <HeadGroup>
                    <input style={{ margin: '10px' }} type='checkbox' id='select-all' onChange={onSelectAll} />
                    <label style={{ margin: '10px' }} for='select-all'>Select all</label>
                    <button onClick={() => { deleteSeletedInfo() }}>DELETE</button>
                </HeadGroup>
            </HeadRow>
            <Table>
                <Row style={{ backgroundColor: '#363b3d', color: 'white', height: '40px' }}>
                    <th></th>
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