// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';

export interface ContactsTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ContactsTwoTone: ContactsTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ContactsTwoToneSvg} />
    ;

ContactsTwoTone.displayName = 'ContactsTwoTone';

export default FunctionalComponent;