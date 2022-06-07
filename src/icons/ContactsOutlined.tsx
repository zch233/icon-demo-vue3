// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ContactsOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined';

export interface ContactsOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ContactsOutlined: ContactsOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ContactsOutlinedSvg} />
    ;

ContactsOutlined.displayName = 'ContactsOutlined';

export default FunctionalComponent;