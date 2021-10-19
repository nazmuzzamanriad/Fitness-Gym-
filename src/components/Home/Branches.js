

import React from 'react';
import { DropdownButton, FormControl, InputGroup, Dropdown } from 'react-bootstrap';

import banner from './../../images/thumbnail.jpeg'
import './Branch.css'

const Branches = () => {
    return (
        <div className='container'>
            <h1>Branch Location</h1>
            <div className='branch'>
                <img src={banner} alt="" srcset="" />
                <div className='branchForm'>
                    <h4 style={{ color: 'white' }}>which is your preferable area?</h4>
                    <InputGroup className="mb-3">
                        <FormControl aria-label="Text input with dropdown button" />

                        <DropdownButton
                            variant="outline-secondary"
                            title="Location"

                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item href="#">Bashundhara</Dropdown.Item>
                            <Dropdown.Item href="#">Dhanmondi</Dropdown.Item>
                            <Dropdown.Item href="#">uttara</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Puran dhaka</Dropdown.Item>
                        </DropdownButton>

                    </InputGroup>
                    <button style={{ backgroundColor: 'white', border: '2px solid black', borderRadius: '10px' }}>Search</button>

                </div>

            </div>

        </div>
    );
};

export default Branches;