import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import controls from '../../../static/controls.png';
import FilterContent from './FilterContent/FilterContent';

class FilterButton extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {

        const {typeChange, garageChange} = this.props;

        const {dropdownOpen} = this.state;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}

                >

                    <img src={controls} />
                </DropdownToggle>
                {dropdownOpen &&

                <DropdownMenu style={{ margin: '-100px 0px 0px 120px' }} >

                    <FilterContent typeChange={typeChange} garageChange={garageChange} />

                </DropdownMenu>

                }
            </Dropdown>
        );
    }
}

export default FilterButton;



