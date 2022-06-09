// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined';

export interface LeftCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LeftCircleOutlined: LeftCircleOutlinedIconType = (props, context) => <Icon name='LeftCircleOutlined' {...{ ...props, ...context.attrs }} icon={LeftCircleOutlinedSvg} />;

LeftCircleOutlined.displayName = 'LeftCircleOutlined';

export default LeftCircleOutlined;