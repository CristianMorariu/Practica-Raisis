import PropTypes from 'prop-types'
import Button from './Button'
export const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click!');
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
