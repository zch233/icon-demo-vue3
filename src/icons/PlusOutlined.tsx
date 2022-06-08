// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';

export interface PlusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlusOutlined: PlusOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PlusOutlinedSvg} />;

PlusOutlined.displayName = 'PlusOutlined';

export default PlusOutlined;