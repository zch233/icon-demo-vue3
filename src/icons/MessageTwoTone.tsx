// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone';

export interface MessageTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MessageTwoTone: MessageTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MessageTwoToneSvg} />;

MessageTwoTone.displayName = 'MessageTwoTone';

export default FunctionalComponent;