// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';

export interface BorderLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BorderLeftOutlined: BorderLeftOutlinedIconType = (props, context) => <Icon name='BorderLeftOutlined' {...{ ...props, ...context.attrs }} icon={BorderLeftOutlinedSvg} />;

BorderLeftOutlined.displayName = 'BorderLeftOutlined';

export default BorderLeftOutlined;