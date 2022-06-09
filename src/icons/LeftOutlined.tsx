// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';

export interface LeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LeftOutlined: LeftOutlinedIconType = (props, context) => <Icon name='LeftOutlined' {...{ ...props, ...context.attrs }} icon={LeftOutlinedSvg} />;

LeftOutlined.displayName = 'LeftOutlined';

export default LeftOutlined;