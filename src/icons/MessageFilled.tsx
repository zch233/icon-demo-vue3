// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';

export interface MessageFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MessageFilled: MessageFilledIconType = (props, context) => <Icon name='MessageFilled' {...{ ...props, ...context.attrs }} icon={MessageFilledSvg} />;

MessageFilled.displayName = 'MessageFilled';

export default MessageFilled;