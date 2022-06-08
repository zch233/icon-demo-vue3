// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined';

export interface DoubleLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DoubleLeftOutlined: DoubleLeftOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DoubleLeftOutlinedSvg} />;

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';

export default DoubleLeftOutlined;