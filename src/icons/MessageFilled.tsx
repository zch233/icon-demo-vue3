// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';

export interface MessageFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MessageFilled: MessageFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MessageFilledSvg} />
    ;

MessageFilled.displayName = 'MessageFilled';

export default FunctionalComponent;