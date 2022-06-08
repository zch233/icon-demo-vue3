// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SplitCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SplitCellsOutlined';

export interface SplitCellsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SplitCellsOutlined: SplitCellsOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SplitCellsOutlinedSvg} />;

SplitCellsOutlined.displayName = 'SplitCellsOutlined';

export default SplitCellsOutlined;