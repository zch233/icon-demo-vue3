// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled';

export interface ContactsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ContactsFilled: ContactsFilledIconType = (props, context) => <Icon name='ContactsFilled' {...{ ...props, ...context.attrs }} icon={ContactsFilledSvg} />;

ContactsFilled.displayName = 'ContactsFilled';

export default ContactsFilled;