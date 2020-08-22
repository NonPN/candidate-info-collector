import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-dropdown-select'
import DatePicker from 'react-datepicker'
import PhoneInput from 'react-phone-input-2'

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
    const [id, setId] = useState()
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState()
    const [passport, setPassport] = useState()
    const [salary, setSalary] = useState()

    useEffect(() => {

    }, [])

    const onGenderChange = (e) => {
        setGender(e.target.value)
    }

    const onSubmit = () => {
        const personObj = {
            title: title,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            nationality: nationality,
            id: id,
            gender: gender,
            phone: phone,
            passport: passport,
            salary: salary
        }
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
                        <Input onChange={e => { setFirstname(e.target.value); }} />
                    </Group>
                    <Group>
                        <Text>Lastname</Text>
                        <Input onChange={e => { setLastname(e.target.value) }} />
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
                        <Input type='text' maxLength='1' />
                    </Group>
                </Row>
                <Row style={{ width: '86%' }}>
                    <Group>
                        <Text>Gender</Text>
                        <div onChange={onGenderChange}>
                            <Input type='radio' id='m' value='male' checked={gender == 'male'}></Input>
                            <label for='m'>male</label>
                            <Input type='radio' id='f' value='female' checked={gender == 'female'}></Input>
                            <label for='f'>female</label>
                            <Input type='radio' id='u' value='unisex' checked={gender == 'unisex'}></Input>
                            <label for='u'>unisex</label>
                        </div>
                    </Group>
                    <Group>
                        <Text>Phone no.</Text>
                        <div><PhoneInput style={{ margin: '10px' }} value={phone} onChange={phone => { setPhone(phone) }} /></div>
                    </Group>
                </Row>
                <Row style={{ width: '86%' }}>
                    <Group>
                        <Text>Passport no.</Text>
                        <Input type='text' onChange={e => { setPassport(e.target.value) }}></Input>
                    </Group>
                    <Group>
                        <Text>Expected salary</Text>
                        <Input type='number' onChange={e => { setSalary(e.target.value); }}></Input>
                        <div>THB.</div>
                    </Group>
                </Row>
            </Body>
        </Container>
    )
}

export default InfoSubmit