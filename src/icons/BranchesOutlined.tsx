// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';

export interface BranchesOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BranchesOutlined: BranchesOutlinedIconType = (props, context) => <Icon name='BranchesOutlined' {...{ ...props, ...context.attrs }} icon={BranchesOutlinedSvg} />;

BranchesOutlined.displayName = 'BranchesOutlined';

export default BranchesOutlined;