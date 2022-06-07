// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';

export interface MessageOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MessageOutlined: MessageOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MessageOutlinedSvg} />
    ;

MessageOutlined.displayName = 'MessageOutlined';

export default FunctionalComponent;