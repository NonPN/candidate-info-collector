import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectAll } from '../redux/actions'

const Row = styled.tr`

`
const TD = styled.td`
    padding: 10px;
    background-color: white;
`

const InfoRow = ({ item, selected, setSelected }) => {
    const [checked, setChecked] = useState(false)

    const selectAll = useSelector(state => state.select)
    const dispatch = useDispatch()

    useEffect(() => {
        setChecked(selectAll)
    }, [selectAll])

    const onChange = (e) => {
        let arr = []
        if (e.target.checked) {
            arr = [...selected, item.id]
            setSelected(arr)
        } else {
            if (selected.length > 0) {
                let n = 0
                selected.map((i, index) => {
                    if (i == item.id) n = index
                })
                arr = [...selected.slice(0, n), ...selected.slice(n + 1, selected.length)]
                setSelected(arr)
            }
        }
        setChecked(e.target.checked)
    }

    return (
        <Row>
            <TD><input type='checkbox' checked={checked} onChange={onChange} /></TD>
            <TD>{item.firstname + " " + item.lastname}</TD>
            <TD>{item.gender}</TD>
            <TD>{item.phone}</TD>
            <TD>{item.nationality}</TD>
            <TD></TD>
        </Row>
    )
}

export default InfoRow