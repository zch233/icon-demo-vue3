// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined';

export interface CompressOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CompressOutlined: CompressOutlinedIconType = (props, context) => <Icon name='CompressOutlined' {...{ ...props, ...context.attrs }} icon={CompressOutlinedSvg} />;

CompressOutlined.displayName = 'CompressOutlined';

export default CompressOutlined;