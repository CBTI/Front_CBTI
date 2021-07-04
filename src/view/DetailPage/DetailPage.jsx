import React, { useState, useEffect } from 'react';
import './DetailPage.css'
import QuestionPage from './QuestionPage/QuestionPage';
import MenuBar from '../menu/MenuBar';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
const DetailPage = (props) => {
    const [temp, setTemp] = useState({});
    const [startButtonClicked, setStartButtonClicked] = useState(false);        // 시작버튼을 클릭하면 심리테스트를 시작하게 만드는 state

    useEffect(() => {
        const { state } = props.location;
        // console.log(props);      // props의 구조를 확인바랍니다. props->location->state에 mbti정보들이 있습니다.
        setTemp(state);
    }, [])
    
    const onClickButton = () => {
        setStartButtonClicked(true);
    }
    return (
        <> 
            <MenuBar/>
                    {!startButtonClicked ?
                    <>
                        <section className = "detail__container">
                            <div key={temp.title + temp.author}className="detail__item">
                            <img src={temp.imgsrc} alt={temp.title} title={temp.title}/>
                            <h3 className="detail__item__title">{temp.title} {temp.testType}</h3>
                            <p className="detail__item__genre">{temp.author}</p>
                            <p className="detail__item__summary">{temp.detail_summary}</p>
                            <Button type="primary" icon={<RightCircleOutlined />} onClick={onClickButton} size="large">시작하기</Button>
                            </div>
                        </section>
                    </>
                    :
                    <>
                        <QuestionPage Key={temp.key}/>
                    </>
                    }
        </>
    )
}

export default DetailPage;
