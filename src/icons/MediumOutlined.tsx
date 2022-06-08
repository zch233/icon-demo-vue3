// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';

export interface MediumOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MediumOutlined: MediumOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MediumOutlinedSvg} />;

MediumOutlined.displayName = 'MediumOutlined';

export default MediumOutlined;