// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';

export interface ContactsTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ContactsTwoTone: ContactsTwoToneIconType = (props, context) => <Icon name='ContactsTwoTone' {...{ ...props, ...context.attrs }} icon={ContactsTwoToneSvg} />;

ContactsTwoTone.displayName = 'ContactsTwoTone';

export default ContactsTwoTone;