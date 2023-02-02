import Cookies from 'js-cookie';
import React, { useState } from 'react';

const TestRadio = () => {
    const [choose,setChoose] = useState();
    const current = Cookies.get('current');

    const saveAnswer = (value) => {
        Cookies.set('current', value);
        setChoose(value)
    }
    return (
        <div>
            <input type={'radio'} name='uji coba' value={'halo'} onChange={(e) => saveAnswer(e.target.value)} checked={current=='halo'} /> halo
            <input type={'radio'} name='uji coba' value={'halo1'} onChange={(e) => saveAnswer(e.target.value)} checked={current=='halo1'} /> Halo1
            <input type={'radio'} name='uji coba' value={'halo2'} /> Halo1
        </div>
    );
}

export default TestRadio;
