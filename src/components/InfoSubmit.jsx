import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-dropdown-select'
import DatePicker from 'react-datepicker'
import PhoneInput from 'react-phone-input-2'
import { useDispatch } from 'react-redux'
import { addInfo } from '../redux/actions'

import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-input-2/lib/style.css'

import getAllNationality from '../values/nationality'

const Container = styled.div`
  width: 1000px;
  margin: auto;
  margin-top: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  background-color: #f0f5f7;
`
const Body = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`
const Group = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.h3`
    margin: 10px;
`
const Input = styled.input`
    margin: 10px;
    padding: 5px;
`
const Btn = styled.button`
    width: 98%;
    height: 30px;
`

const titleOptions = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Ms.', value: 'Ms.' }
]

const InfoSubmit = () => {
    const [title, setTitle] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthday, setBirthday] = useState(new Date())
    const [nationality, setNationality] = useState('')
    const [cid, setCid] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState()
    const [passport, setPassport] = useState('')
    const [salary, setSalary] = useState()

    const dispatch = useDispatch()

    const onGenderChange = (e) => {
        setGender(e.target.value)
    }

    const resetInfo = () => {
        setTitle('')
        setFirstname('')
        setLastname('')
        setBirthday(new Date())
        setNationality('')
        setCid('')
        setGender('')
        setPhone()
        setPassport('')
        setSalary(0)
    }

    const onSubmit = () => {
        let data = localStorage.getItem('data')
        let id = localStorage.getItem('id')

        if (id) {
            localStorage.setItem('id', parseInt(id) + 1)
            id = localStorage.getItem('id')
        } else {
            localStorage.setItem('id', 0)
            id = localStorage.getItem('id')
        }

        const personObj = {
            id: id,
            title: title,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            nationality: nationality,
            cid: cid,
            gender: gender,
            phone: phone,
            passport: passport,
            salary: salary
        }

        if (data) {
            let jdata = JSON.parse(data)
            jdata.value.push(personObj)
            localStorage.setItem('data', JSON.stringify(jdata))
            dispatch(addInfo(personObj))
        } else {
            let arr = [personObj]
            localStorage.setItem('data', JSON.stringify({ value: arr }))
            dispatch(addInfo(personObj))
        }

        resetInfo()
    }

    return (
        <Container>
            <Body>
                <Row>
                    <Group>
                        <Text>Title</Text>
                        <Select style={{ margin: '10px' }} options={titleOptions} onChange={item => { setTitle(item[0].value); }} />
                    </Group>
                    <Group>
                        <Text>Firstname</Text>
                        <Input value={firstname} onChange={e => { setFirstname(e.target.value); }} />
                    </Group>
                    <Group>
                        <Text>Lastname</Text>
                        <Input value={lastname} onChange={e => { setLastname(e.target.value) }} />
                    </Group>
                </Row>
                <Row style={{ width: '83%' }}>
                    <Group>
                        <Text>Birthday</Text>
                        <DatePicker style={{ margin: '10px' }} selected={birthday} onChange={date => setBirthday(date)} />
                    </Group>
                    <Group>
                        <Text>Nationality</Text>
                        <Select style={{ width: '300px', margin: '10px' }} options={getAllNationality()} onChange={item => { setNationality(item[0].value); }} />
                    </Group>
                </Row>
                <Row>
                    <Group>
                        <Text>CitizenID</Text>
                        <Input type='text' maxLength='13' value={cid} onChange={e => { setCid(e.target.value) }} />
                    </Group>
                </Row>
                <Row style={{ width: '86%' }}>
                    <Group>
                        <Text>Gender</Text>
                        <div onChange={onGenderChange}>
                            <Input type='radio' id='m' value='male' checked={gender === 'male'}></Input>
                            <label for='m'>male</label>
                            <Input type='radio' id='f' value='female' checked={gender === 'female'}></Input>
                            <label for='f'>female</label>
                            <Input type='radio' id='u' value='unisex' checked={gender === 'unisex'}></Input>
                            <label for='u'>unisex</label>
                        </div>
                    </Group>
                    <Group>
                        <Text>Phone no.</Text>
                        <div><PhoneInput style={{ margin: '10px' }} value={phone} onChange={phone => { setPhone('+' + phone) }} /></div>
                    </Group>
                </Row>
                <Row style={{ width: '86%' }}>
                    <Group>
                        <Text>Passport no.</Text>
                        <Input type='text' value={passport} onChange={e => { setPassport(e.target.value) }}></Input>
                    </Group>
                    <Group>
                        <Text>Expected salary</Text>
                        <Input type='number' value={salary} onChange={e => { setSalary(e.target.value); }}></Input>
                        <div>THB.</div>
                    </Group>
                </Row>
                <Row style={{ justifyContent: 'center', marginTop: '30px' }}>
                    <Btn onClick={onSubmit}><b>Submit</b></Btn>
                </Row>
            </Body>
        </Container>
    )
}

export default InfoSubmit