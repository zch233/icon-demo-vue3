// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';

export interface FunctionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FunctionOutlined: FunctionOutlinedIconType = (props, context) => <Icon name='FunctionOutlined' {...{ ...props, ...context.attrs }} icon={FunctionOutlinedSvg} />;

FunctionOutlined.displayName = 'FunctionOutlined';

export default FunctionOutlined;