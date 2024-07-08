import React from 'react';
import '../../CSS/login.css';
import {  Link , useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();



  return (
    <div className="login_wrapper">
        <div className="login">
              <div>
          <img
          className="w-full rounded-lg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAe1BMVEX///8AgP8Abv/m7f8Aev93pf8AeP8AdP/6/P+jw/+QtP93p/8Aff/w9v8Acv+gxf+syv/M4P/V5f99q/+bvv9Jkf/1+f8ziv/p8f+awf/a6P9GjP/G2/8Aa/9Znf9Pj/+x0P+81P8ghP+Ouf9Zmf9qnf97r/9opf+Mr/8jwox5AAAEnElEQVR4nO2da3eqOhBABTGhEBWVl4rKS+3//4UX2nvO0QWVRDIh6Zr92WaxF8kQhsl0NkMQBEEQBEEQBEEQBEEQBEEQBEEQBPlHfMjydeXdfH8xDt/f3apwnWeHeBqTw/58OZZlaTHGnNE0g1jNYMfLeT9XrpJf2BeWVL7HjHKVJm5gUckaT0rUClxVLpvIBlT50rGjjRKVOKAEVqWF0EBBLEg9G16lxfZScBdfkUtj4wPbxD5V5WJZ1IedaZ6C5fIP4kG6BBZwGHuGWQGcyzZS6tLYRFswGbWTrAVuohWl4hvT3JqygHGJPYWR7A/Ug4lom0T5jWluTQKzrwlW6l0sawUS0NKd8uXfQkD2AYcpZlk7zw4AMtkks6yZZ5l8F3eaJdMuGvkvanE1QWBuIQDBeXmfZP03MvelfJmzI+XaGBPMhDi1fJl09CaTMadNJyXHhqQsra8EE8efRfJjczpuY9aIJPVit8+z7TxN59ssr3aLa5Rw/GUJIDNGxSLltSo6F7XcFjwrEUBmxJJxLL9r8k0+HPCJ/BTn/P3HDInyH9cwx9NrBSDzdlaG3F9cDYeMrZEMvb966JklQ+qXw3LInLSRYdbrYY2SoQNx1aRpRtcDwxok40RD+yqDZOhgosgcGacevA5zZFYfg8OaI1MOv74bI0PuL+Oy68ZxvB5+GddDhoY/WISJQxtIA8deXA8Zpz8ZWZ3EvrtrIcOSviUT30WzPHrI9H3Ld8W/8Wgh45x7EquZeJJXD5lrN5i5lXj2TQ+ZRVdm/kb2TVuZ7I2ElbYyxRsJa21l3vmUoK/ML7oz7sdvkglRBmVQRkjmVwUAlJlG5utl+C92d9fshif6jLYyzm79yL7oVCO4m/36+TccNtPIrHLhUdOTtjLi1VQFx8bTGBmNp5m4DE8NmzEyPGUfxsjoG5rfkOEIZsbIpDzbClNkuEolTZHh+KBhjsyNJ79pikzNkxI0RabkcDFFxuXK1Roic9BZJhccM9NYhlbbzSOHbql4un3gUPG4TPXazJ7oOV/hftiPv+By0SOhQfxOFZBJCQ2UQRmUQRmUQRmUQRmUQRlxGeGqF1kyFEBGuOpNlowDcRpQtFJMkgyDOA0oXFwpSyYBkBE+QStLBuAErfjZZkkyzhngoLbwqXNJMhCnzmPhIl5JMrSS3w9AvFODJBmITg3iPTRkyQD00BDvbiJHBqa7yVK074wcGbKTv/5n4jXJcmRgOgLNNoKPTSkyvedWJOAKdtGSIkM9oPaggmdfZMj0n46SgtipJBkygC0OD1xfhyXKsBoiLv9PLnL8ZbwMs3I4l9ksFJhoZNfZVAnKkB8OekoivvE/bEbLrD6BGx0vbzxVVVJkTjeQZ/8jcchrM1LmFCrocewWnP2aR8kQ2q2KBmFec3XSHiHD7OG2CNIoLhxf8d+VaYa+APU1/UnneiyZ87IyQVimHc1h5fGqVqUlDW7X+pIkzXPUIX3Yi65MeOr9KSHffdyi+noL1P9fgO9rm2+KPNiHVeX18Nltue5mn32/bKjC/Tov+sptEARBEARBEARBEARBEARBEARBEAQR5D8RKnQQ27ZTuQAAAABJRU5ErkJggg==" alt=""
             />

          <h2 className="text-center" onClick={() => navigate('/signInpage')}>
            Sign in with Facebook
          </h2>
          <button onClick={() => navigate('/loginpage')}>
            Login with Facebook
          </button>
              </div>
        </div>
    </div>
  )
}

export default Login;