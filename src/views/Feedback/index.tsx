import React, { useState } from 'react';
import { Card, Typography, Input, Button, Rate, message } from 'antd';
import axios from 'axios';
const { Title } = Typography;

const FeedbackPage: React.FC = () => {
    const [feedback, setFeedback] = useState<string>('');
    const [rating, setRating] = useState<number>(0);

    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async () => {
        if (!feedback) {
            message.warning('请填写反馈意见');
            return;
        }
    
        try {
            // 假设你的后端接口是 /api/feedback
            await axios.post('http://localhost:6006/feedback', {
                feedback,
                rating,
            });
    
            message.success('反馈提交成功，谢谢您的意见！');
            setFeedback('');
            setRating(0);
        } catch (error) {
            console.error('提交反馈时出错:', error);
            message.error('反馈提交失败，请稍后再试');
        }
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Card style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                <Title level={3} style={{ textAlign: 'center' }}>反馈意见</Title>
                
                <div style={{ marginTop: '20px' }}>
                    <Rate onChange={setRating} value={rating} />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Input.TextArea
                        rows={4}
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="请输入您的反馈意见"
                    />
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Button type="primary" onClick={handleSubmit}>提交反馈</Button>
                </div>
            </Card>
        </div>
    );
};

export default FeedbackPage;
