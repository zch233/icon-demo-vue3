// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined';

export interface MailOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MailOutlined: MailOutlinedIconType = (props, context) => <Icon name='MailOutlined' {...{ ...props, ...context.attrs }} icon={MailOutlinedSvg} />;

MailOutlined.displayName = 'MailOutlined';

export default MailOutlined;