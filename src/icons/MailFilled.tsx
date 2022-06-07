// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';

export interface MailFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MailFilled: MailFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MailFilledSvg} />
    ;

MailFilled.displayName = 'MailFilled';

export default FunctionalComponent;