import React from 'react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatWindow from '../src/chatwindow';

jest.mock('axios');

Enzyme.configure({ adapter: new Adapter() });

describe('Chat interface', () => {
    test('First message of bot', () => {
        const wrapper = mount(<ChatWindow />);
        const chat = wrapper.find('Chat');
        const children = chat.find('.bot');
        expect(children.first('.MuiButton-label').text()).toMatch('Hello I am a chatbot');
    });

    axios.post.mockResolvedValue({
        data: {
            fulfillmentText: 'How are you?'
        }
    });

    test('Send message and get response', () => {
        const wrapper = mount(<ChatWindow />);
        wrapper.find('#chat-textfield').last().simulate('change', {
            target: {
                value: 'Hello'
            }
        });
        wrapper.find({ 'aria-label': 'Send' }).first().simulate('click');
        wrapper.update();
        expect(axios.post).toBeCalled();
        expect(axios.post.mock.calls[0][1]).toEqual({
                text: 'Hello',
                sessionId: null,
        });
    })
});

