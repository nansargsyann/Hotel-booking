// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiBed, BiCalendar } from 'react-icons/bi';
import { TiLocation } from "react-icons/ti";
//import { CiLocationOn } from "react-icons/ci";

const HotelCard = () => {
  return (
    <Card className='mb-4'>
      <Card.Img variant="top" src="https://via.placeholder.com/500x400" />
      <Card.Body>
        <Card.Title>Albatros Palace Sharm</Card.Title>
        <Card.Text className='mb-2'> <TiLocation />Naama Bay, Sharm El Sheikh, Egypt</Card.Text>
        <Card.Text className='mb-2'> <BiCalendar />for 7 days</Card.Text>
        <Card.Text className='mb-2'> <BiBed />2 bed</Card.Text>
        <Card.Text className='text-muted'> Available from 10/19/2022</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default HotelCard;