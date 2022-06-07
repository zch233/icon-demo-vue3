// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone';

export interface MailTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MailTwoTone: MailTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MailTwoToneSvg} />
    ;

MailTwoTone.displayName = 'MailTwoTone';

export default FunctionalComponent;