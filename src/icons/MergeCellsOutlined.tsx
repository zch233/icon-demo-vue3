// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MergeCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeCellsOutlined';

export interface MergeCellsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MergeCellsOutlined: MergeCellsOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MergeCellsOutlinedSvg} />;

MergeCellsOutlined.displayName = 'MergeCellsOutlined';

export default FunctionalComponent;